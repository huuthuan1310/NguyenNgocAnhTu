$file = 'c:\Users\ekaz.nyra\Downloads\NguyenNgocAnhTu\README.md'
$c = Get-Content $file -Raw -Encoding UTF8

$c = $c.Replace('Version-1.0.0-34C759', 'Version-1.0.3-34C759')
$c = $c.Replace('**Tinh nang v1.0.0**', '**Tinh nang v1.0.3**')
$c = $c.Replace('**Features v1.0.0**', '**Features v1.0.3**')
$c = $c.Replace('32+ Apps', '25 Apps')
$c = $c.Replace('20+ Apps', '25 Apps')
$c = $c.Replace('Copyright (c) 2025', 'Copyright (c) 2026')

Set-Content -Path $file -Value $c -Encoding UTF8 -NoNewline
Write-Host 'Patch OK'
