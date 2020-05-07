<Query Kind="Statements">
  <Connection>
    <ID>6723297d-410b-437d-b989-a19af353cc3c</ID>
    <NamingServiceVersion>2</NamingServiceVersion>
    <Persist>true</Persist>
    <Driver Assembly="(internal)" PublicKeyToken="no-strong-name">LINQPad.Drivers.EFCore.DynamicDriver</Driver>
    <ConvertUnderscoresToPascal>true</ConvertUnderscoresToPascal>
    <Server>108.60.212.196</Server>
    <UserName>islah</UserName>
    <Password>AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAARhq6hpo0fEKjfvi+e55N1wAAAAACAAAAAAAQZgAAAAEAACAAAAABwxMl0Uxyg8UX3SNpllmEk80Ldcp25ruhxhA09CfQbgAAAAAOgAAAAAIAACAAAABuMP3sriUzZeJpx5b0NMyfoT/0yk22TI924JbNoIthihAAAAC6Km39uGnsHCvrCMJc8RnBQAAAAGcqwz8zvTSzxhfkpKW33bK6Bqhu/3mnNLrhNl1d3nYzxDJLFqX86gW/OsTsWZEnrBgJi5r3mY40/2zyJr+nyog=</Password>
    <DriverData>
      <EFProvider>Oracle.EntityFrameworkCore</EFProvider>
      <QuietenAllCaps>True</QuietenAllCaps>
      <Port>1521</Port>
      <ServiceName>orcl</ServiceName>
    </DriverData>
  </Connection>
</Query>

 
//
// Orders.Where(or=>or.ID==311).Select(of=>of.OrderOffers.Where(of=>of.Price>1000)) 
// 
// 
 var ords =   from order in Orders
 join offer in Offers on order.ID  equals offer.OrderID   
 join supplier in Suppliers on offer.SupplierID equals supplier.ID  
 where offer.Confirmation  ==1
 group offer by order into offers 
 
   
 
 select  new {
   Order=offers.Key,
   Offers=offers.ToList()
 };
 
 foreach(var order in ords)
 {
 Console.WriteLine(order);
 }
 
 

 