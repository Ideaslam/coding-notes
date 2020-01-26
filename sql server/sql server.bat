@echo off
cls

rem Set these variables to the desired values

set SqlServer=ISLAMHAA\ISLAM
set InstanceName=ISLAM
set Username=sa
set Password=05510551
set Database=Vision
set LocalFolder=E:\TEST
set NetworkFolder="\\remotecomputer\folder" (URL to permanent backup location, include quotes)




rem ************************************
rem * Don't touch anything below here. *
rem ************************************

echo Getting current date and time...
echo.
for /f %%a in ('sqlcmd -S %SqlServer% -U %Username% -P %Password% -Q "SET NOCOUNT ON select ltrim(convert(date, getdate()))" -h -1') do set CurrentDate=%%a
for /f %%a in ('sqlcmd -S %SqlServer% -U %Username% -P %Password% -Q "SET NOCOUNT ON select right('00' + ltrim(datepart(hour, getdate())), 2)" -h -1') do set CurrentHour=%%a
for /f %%a in ('sqlcmd -S %SqlServer% -U %Username% -P %Password% -Q "SET NOCOUNT ON select right('00' + ltrim(datepart(minute, getdate())), 2)" -h -1') do set CurrentMinute=%%a
for /f %%a in ('sqlcmd -S %SqlServer% -U %Username% -P %Password% -Q "SET NOCOUNT ON select right('00' + ltrim(datepart(second, getdate())), 2)" -h -1') do set CurrentSecond=%%a

echo.
echo Backing up database to %LocalFolder%
echo.
SqlCmd -S %SqlServer% -U %Username% -P %Password% -Q "Backup Database %Database% To Disk='%LocalFolder%\%Database%-%CurrentDate%_%CurrentHour%%CurrentMinute%%CurrentSecond%.bak'"

echo.
echo.
echo Copying backup to %NetworkFolder%
echo.
move /Y %LocalFolder%\%Database%-*.bak %NetworkFolder%