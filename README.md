# Cleanify

Cleanify is a tiny Deno tool to remove files and folders specified by globs in .clean files with a syntax similar to .gitignore files.

Every .clean files in the current folder (and subdirectories) is inspected
and each file matching the defined globs gets removed.
