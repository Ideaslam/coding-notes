echo Running Insertar Device script.sql  
sqlcmd -S .\SQLEXPRESS -U sa -P sa -i "Insertar un Device.sql" -b -o "out.log"