<Query Kind="Statements">
  <Connection>
    <ID>052ffd39-ce8a-4dc8-bb89-01198790c7ae</ID>
    <NamingServiceVersion>2</NamingServiceVersion>
    <Persist>true</Persist>
    <Driver Assembly="(internal)" PublicKeyToken="no-strong-name">LINQPad.Drivers.EFCore.DynamicDriver</Driver>
    <ConvertUnderscoresToPascal>true</ConvertUnderscoresToPascal>
    <Server>144.91.94.182</Server>
    <UserName>life</UserName>
    <Password>AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAARhq6hpo0fEKjfvi+e55N1wAAAAACAAAAAAAQZgAAAAEAACAAAABQXy4XsYRwRdzyK48/bAzfGbwxZ8V4SCnvPWqv/yVSDgAAAAAOgAAAAAIAACAAAAC3rgv8ds2ArCELQiM8ovnJQnjcmwaDA1ddaUq8DBSD7BAAAAD+7jWPChnNsOg5cOO1lx1IQAAAAA5AleS7en7QVnKSrWeV5MfdIkN8RlNsqdK93GbE2Vbt0ZDzxGCOdJKiAGHgrgiTkMkGPoURf5+NemZzefjNiMs=</Password>
    <Database>live</Database>
    <DriverData>
      <EFProvider>Pomelo.EntityFrameworkCore.MySql</EFProvider>
      <Port>3306</Port>
    </DriverData>
  </Connection>
</Query>

var bs = (from nursery in Nurseries
join room in Rooms on nursery.Id equals room.NurseryId
join bed in Beds on room.Id equals bed.RoomId
where bed.Status==1 && nursery.Id ==10 
select new {
bed.Id
}).ToList()  ;

var rand = new Random();
var b = bs[rand.Next(bs.Count)];
 Console.WriteLine(b);
 foreach(var bed in bs)
 {
 Console.WriteLine(bed);
 }
 