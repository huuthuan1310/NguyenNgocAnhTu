$utf8 = New-Object System.Text.UTF8Encoding $false

$files = Get-ChildItem -Path "Module\*" -File
foreach ($f in $files) {
    $content = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    [System.IO.File]::WriteAllText($f.FullName, $content, $utf8)
    Write-Host "Fixed: $($f.Name)"
}

$readme = [System.IO.File]::ReadAllText("$PWD\README.md", [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText("$PWD\README.md", $readme, $utf8)
Write-Host "Fixed: README.md"
Write-Host "All done!"
