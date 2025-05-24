# clean.ps1 - removes node_modules, package-lock.json, and dist folder

Write-Host "Cleaning project folders..."

$itemsToRemove = @("node_modules", "package-lock.json", "dist")

foreach ($item in $itemsToRemove) {
    if (Test-Path $item) {
        Write-Host "Removing $item ..."
        Remove-Item -Recurse -Force $item
    }
    else {
        Write-Host "$item does not exist, skipping."
    }
}

Write-Host "Clean up complete."
