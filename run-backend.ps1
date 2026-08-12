$ErrorActionPreference = 'Stop'

$javaHome = $env:JAVA_HOME
if (-not $javaHome -or -not (Test-Path "$javaHome\bin\java.exe")) {
    $candidatePaths = @(
        'C:\Program Files\Eclipse Adoptium\jdk-17.0.20.8-hotspot',
        'C:\Program Files\Java\jdk-17.0.1',
        'C:\Program Files\Java\jdk-17',
        'C:\Program Files\Java'
    )

    $extraJdks = Get-ChildItem 'C:\Program Files\Eclipse Adoptium' -Directory -ErrorAction SilentlyContinue
    foreach ($jdk in $extraJdks) {
        $candidatePaths += $jdk.FullName
    }

    foreach ($candidate in $candidatePaths) {
        if (Test-Path "$candidate\bin\java.exe") {
            $javaHome = $candidate
            break
        }
    }
}

if (-not $javaHome -or -not (Test-Path "$javaHome\bin\java.exe")) {
    throw 'JDK 17 was not found. Install Temurin JDK 17 and ensure JAVA_HOME points to the JDK folder.'
}

$env:JAVA_HOME = $javaHome
$env:Path = "$javaHome\bin;$env:Path"
$env:PORT = '8080'

$listener = Get-NetTCPConnection -LocalPort 8080 -ErrorAction SilentlyContinue
if ($listener) {
    foreach ($conn in $listener) {
        if ($conn.OwningProcess) {
            Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
        }
    }
}

Set-Location "$PSScriptRoot\backend"
Write-Host "Using JAVA_HOME=$env:JAVA_HOME"
Write-Host 'Starting Spring Boot backend on port 8080...'

mvn spring-boot:run
