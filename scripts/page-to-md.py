#!/usr/bin/env python3
"""Turn the <main> content of a rendered page into Markdown for content review docs.

Usage: python3 scripts/page-to-md.py http://localhost:3000/washer-repair-temple-tx/
"""
import html
import re
import sys
import urllib.request
from html.parser import HTMLParser

SKIP_TAGS = {'script', 'style', 'svg', 'form', 'button', 'select', 'textarea', 'nav'}
BLOCKS = {'h1': '# ', 'h2': '## ', 'h3': '### ', 'p': '', 'li': '- ', 'dt': '', 'dd': '', 'blockquote': '> ', 'summary': ''}


class Md(HTMLParser):
    def __init__(self):
        super().__init__()
        self.out, self.buf, self.stack, self.skip, self.row, self.in_table = [], [], [], 0, None, False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in SKIP_TAGS or a.get('aria-hidden') == 'true' or 'sr-only' in (a.get('class') or ''):
            self.skip += 1
            self.stack.append(('skip', tag))
            return
        self.stack.append(('tag', tag))
        if self.skip:
            return
        if tag == 'table':
            self.in_table, self.table = True, []
        elif tag == 'tr':
            self.row = []
        elif tag in ('td', 'th'):
            self.buf = []
        elif tag in BLOCKS:
            self.flush()
        elif tag in ('br', 'span', 'a', 'strong', 'em'):
            self.buf.append(' ')

    def handle_endtag(self, tag):
        while self.stack:
            kind, t = self.stack.pop()
            if kind == 'skip':
                self.skip -= 1
            if t == tag:
                break
        if self.skip:
            return
        if tag in ('td', 'th') and self.row is not None:
            self.row.append(self.text())
            self.buf = []
        elif tag == 'tr' and self.row is not None:
            self.table.append(self.row)
            self.row = None
        elif tag == 'table':
            self.in_table = False
            if self.table:
                width = max(len(r) for r in self.table)
                rows = [r + [''] * (width - len(r)) for r in self.table]
                self.out.append('| ' + ' | '.join(rows[0]) + ' |')
                self.out.append('|' + '---|' * width)
                self.out += ['| ' + ' | '.join(r) + ' |' for r in rows[1:]]
                self.out.append('')
        elif tag in BLOCKS:
            self.flush(BLOCKS[tag])
        elif tag in ('span', 'a'):
            self.buf.append(' ')

    def handle_data(self, data):
        if not self.skip:
            self.buf.append(data)

    def text(self):
        return re.sub(r'\s+', ' ', html.unescape(''.join(self.buf))).strip()

    def flush(self, prefix=''):
        t = self.text()
        self.buf = []
        if t and not self.in_table and not re.fullmatch(r'\d{1,2}', t):
            self.out.append(prefix + t)
            if prefix.startswith('#') or prefix == '':
                self.out.append('')


def main(url):
    page = urllib.request.urlopen(url).read().decode()
    main_html = page[page.index('<main'): page.index('</main>')]
    p = Md()
    p.feed(main_html)
    p.flush()
    md = '\n'.join(p.out)
    md = re.sub(r'\n{3,}', '\n\n', md)
    print(md.strip())


if __name__ == '__main__':
    main(sys.argv[1])
