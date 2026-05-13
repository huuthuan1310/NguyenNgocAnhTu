$file = 'c:\Users\ekaz.nyra\Downloads\NguyenNgocAnhTu\README.md'
$c = Get-Content $file -Raw -Encoding UTF8

# Regex replace: any line containing "v1.0.0" inside bold markers **...**
# but NOT inside changelog h3 headings
$c = [regex]::Replace($c, '\*\*([^\r\n]*?)v1\.0\.0\*\*', '**$1v1.0.3**')

# Copyright year: use regex for unicode-safe match
$c = [regex]::Replace($c, 'Copyright\s+(?:\(c\)|\u00A9)\s+2025', 'Copyright (c) 2026')

# Fix leftover "25 Apps Premium (17 -> 20+ apps)" which was changed to "25 Apps Premium (17 -> 25 Apps apps)" by earlier naive replace
$c = $c.Replace('25 Apps Premium (17 -> 25 Apps apps)', '25 Apps Premium (17 -> 25 apps)')
# Handle the unicode arrow too
$c = [regex]::Replace($c, '25 Apps Premium \(17 (?:\u2192|->)[ ]*25 Apps apps\)', '25 Apps Premium (17 -> 25 apps)')

Set-Content -Path $file -Value $c -Encoding UTF8 -NoNewline
Write-Host 'Patch2 OK'
