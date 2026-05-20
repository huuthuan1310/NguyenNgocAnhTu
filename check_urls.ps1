$urls = @(
  'https://raw.githubusercontent.com/yqc007/QuantumultX/master/WinkForeverVipCrack.js',
  'https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/lightroom.js',
  'https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/WPSOffice/Script/WPS.js',
  'https://raw.githubusercontent.com/Marol62926/MarScrpt/main/soundcloud.js',
  'https://raw.githubusercontent.com/Alex0510/Eric/Alex0510/surge/surge/Script/caml.js',
  'https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js',
  'https://raw.githubusercontent.com/deezertidal/private/master/js-backup/Crack/612.js',
  'https://raw.githubusercontent.com/yqc007/QuantumultX/master/GrammarlyPremiumCrack.js',
  'https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/notability.js',
  'https://raw.githubusercontent.com/deezertidal/private/master/js-backup/Crack/poh.js',
  'https://raw.githubusercontent.com/Marol62926/MarScrpt/main/smallpdf.js',
  'https://raw.githubusercontent.com/deezertidal/shadowrocket-rules/main/js/peak.js',
  'https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Polarr.js',
  'https://raw.githubusercontent.com/Marol62926/MarScrpt/main/myFitnessPal.js',
  'https://raw.githubusercontent.com/Marol62926/MarScrpt/main/musixmatch.js',
  'https://raw.githubusercontent.com/deezertidal/private/master/js-backup/Crack/fimo.js',
  'https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Varlens.js',
  'https://raw.githubusercontent.com/Marol62926/MarScrpt/main/alarmy.js'
)
foreach ($u in $urls) {
  try {
    $r = Invoke-WebRequest -Uri $u -Method Get -TimeoutSec 15 -UseBasicParsing -ErrorAction Stop
    $size = $r.Content.Length
    Write-Host ("OK   {0}  size={1}  {2}" -f $r.StatusCode, $size, $u)
  } catch {
    Write-Host ("FAIL {0}  {1}" -f $_.Exception.Message, $u)
  }
}
