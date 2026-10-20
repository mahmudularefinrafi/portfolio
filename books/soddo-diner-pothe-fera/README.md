# সদ্য দ্বীনের পথে ফেরা — Book Website

Responsive Bengali-first book landing page and embedded PDF reader for the Portfolio Books section.

## Required PDF asset

Place the author's original 109-page PDF in this directory as `book.pdf`.

The source PDF is not committed by this change because the GitHub text-file connector cannot safely upload binary PDF bytes. Upload the provided PDF using GitHub's web interface:
1. Open this directory on the feature branch.
2. Add file → Upload files.
3. Upload the original PDF and name it `book.pdf`.
4. Commit the upload to this branch.

Until that binary asset is uploaded, the landing page loads but the embedded reader will not show the book.

## Route

When deployed as a static site from the repository root, open:
`/books/soddo-diner-pothe-fera/`

## Notes

- Book title, author, subtitle, and chapter headings are based on the supplied PDF.
- The decorative cover on the page is a CSS recreation, not the original cover image.
- The original PDF remains the source of truth for the text; OCR-extracted text was not substituted.
