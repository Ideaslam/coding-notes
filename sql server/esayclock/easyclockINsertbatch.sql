insert into MyOracle..HOTA.EASYCLOCK SELECT  
      [USER_ID]
      ,[DEVICE_SERIAL_NO]
      ,convert(nvarchar(MAX),[LOG_TIME], 20)
	FROM [SekureTime].[dbo].[USER_TIME_LOG] where [USER_ID]+''+convert(nvarchar(MAX),[LOG_TIME], 20) not in (SELECT EMP_ID+''+E_DATE  FROM MyOracle..HOTA.EASYCLOCK) ;
