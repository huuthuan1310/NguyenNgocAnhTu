$files = Get-ChildItem -Path "Module\*" -File
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    if ($content -match 'ekaznyra/NguyenNgocAnhTu/main/') {
        $content = $content -replace 'ekaznyra/NguyenNgocAnhTu/main/', 'ekaznyra/NguyenNgocAnhTu/master/'
        Set-Content -Path $f.FullName -Value $content -NoNewline
    }
}
$readme = Get-Content "README.md" -Raw
$readme = $readme -replace 'ekaznyra/NguyenNgocAnhTu/main/', 'ekaznyra/NguyenNgocAnhTu/master/'
Set-Content -Path "README.md" -Value $readme -NoNewline
Write-Host "Done - replaced all /main/ with /master/"
