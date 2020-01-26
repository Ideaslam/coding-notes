USE [SekureTime]
GO
SET IDENTITY_INSERT [dbo].[TA_COMPANY_DEVICES] ON 
INSERT [dbo].[TA_COMPANY_DEVICES] ([COMPANY_CODE], [DEVICE_SERIAL_NUMBER], [ACCESS_CONTROL], [ServerID], [Password], [ConnectionSetting]) 
VALUES (N'ectest', N'62500544', 0, 0, NULL, 1),
	   (N'ectest', N'62500547', 0, 0, NULL, 1),
	   (N'ectest', N'62500545', 0, 0, NULL, 1),
	   (N'ectest', N'62500549', 0, 0, NULL, 1)
SET IDENTITY_INSERT [dbo].[TA_COMPANY_DEVICES] OFF

SET IDENTITY_INSERT [dbo].[DEVICE] ON 
INSERT [dbo].[DEVICE] ([SERIAL_NUMBER], [COMPANY_CODE], [DEVICE_LOCATION_NAME], [COMPANY_LOCATION_CODE], [MAKE_CODE], [MODEL_CODE], [DEVICE_LOCATION_ID], [AUTHENTICATION_MODE], [HARDWARE_VERSION], [FIRMWARE_VERSION], [BAUD_RATE], [IP_ADDRESS], [COMMUNICATION_MODE], [COMMUNICATION_PASSWORD], [COMM_PORT], [USB_PORT], [DYNDNS], [PORT_NUMBER], [TIME_ZONE], [SUPPORT_REAL_TIME_FLAG], [STRIKE_OPEN_TIME], [DOOR_OPEN_TIME], [DOOR_SENSOR_TYPE], [DURESS], [VANDAL_ALARM], [WIEGAND_TYPE], [LAST_DOWNLOAD_DATE], [CREATE_DATE], [CREATE_USER], [USE_WIFI], [WIFI_SSID], [WIFI_KEY], [USE_DHCP], [SUBNET], [DEF_GATEWAY], [LAST_CONNECTED], [LAST_CONNECTED_IP], [RELAY_TYPE], [ONLINE], [ASSIGNED_JOB], [USER_NAME], [PASSWORD], [SECURITY_ID], [ACCESS_CONTROL], [VERIFY_MODE_R1], [VERIFY_MODE_R2], [WATCH_TAMPER], [VERIFY_FAIL_LOG], [GLOG_WARNING], [SLOG_WARNING], [USER_TOUCH_R1], [USER_TOUCH_R2], [ANTIPASS_USE], [USE_WIFI_DHCP], [USE_WIFI_AP_DHCP], [USE_WIFI_AP], [WIFI_IP], [WIFI_PORT], [WIFI_MASK], [WIFI_GATEWAY], [WIFI_AP_KEY], [WIFI_AP_SSID], [WIFI_AP_IP], [WIFI_AP_PORT], [WIFI_AP_GATEWAY], [WIFI_AP_SUBNET], [WIFI_AP_AUTH_MODE], [AP_DHCP_IP_START], [AP_DHCP_IP_END], [MAX_MANAGER_COUNT], [LOCK_MODE], [LUMI_SPOOF_THRESHOLD_R1], [LUMI_SPOOF_THRESHOLD_R2], [REVERIFY_TIME], [SERVER_IP], [SERVER_PORT], [NTP_SERVER_IP], [GMT_OFFSET], [RELAY1ACTIVE], [RELAY2ACTIVE], [RELAY3ACTIVE], [EXIT_BUTTON_POS]) 
VALUES (N'62500544', N'ectest', N'temp_device1', N'001', N'EC', N'62', NULL, NULL, NULL, NULL, NULL, N'10.0.0.100', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, CAST(0x000063DF00000000 AS DateTime), CAST(0x0000A27E00C1CACC AS DateTime), N'CRM', 0, N'null', N'', 1, N'255.255.255.0', N'null', CAST(0x000063DF00000000 AS DateTime), N'67.23.71.186:1992', NULL, 0, NULL, NULL, NULL, NULL, 0, 1, 1, 1, 0, 500, 500, 0, 0, 0, 0, 0, 0, N'null', 0, N'', N'', N'', N'', N'', 0, NULL, N'', 4, N'', N'', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(N'62500547', N'ectest', N'temp_device1', N'001', N'EC', N'62', NULL, NULL, NULL, NULL, NULL, N'10.0.0.100', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, CAST(0x000063DF00000000 AS DateTime), CAST(0x0000A27E00C1CACC AS DateTime), N'CRM', 0, N'null', N'', 1, N'255.255.255.0', N'null', CAST(0x000063DF00000000 AS DateTime), N'67.23.71.186:1992', NULL, 0, NULL, NULL, NULL, NULL, 0, 1, 1, 1, 0, 500, 500, 0, 0, 0, 0, 0, 0, N'null', 0, N'', N'', N'', N'', N'', 0, NULL, N'', 4, N'', N'', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(N'62500545', N'ectest', N'temp_device1', N'001', N'EC', N'62', NULL, NULL, NULL, NULL, NULL, N'10.0.0.100', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, CAST(0x000063DF00000000 AS DateTime), CAST(0x0000A27E00C1CACC AS DateTime), N'CRM', 0, N'null', N'', 1, N'255.255.255.0', N'null', CAST(0x000063DF00000000 AS DateTime), N'67.23.71.186:1992', NULL, 0, NULL, NULL, NULL, NULL, 0, 1, 1, 1, 0, 500, 500, 0, 0, 0, 0, 0, 0, N'null', 0, N'', N'', N'', N'', N'', 0, NULL, N'', 4, N'', N'', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(N'62500549', N'ectest', N'temp_device1', N'001', N'EC', N'62', NULL, NULL, NULL, NULL, NULL, N'10.0.0.100', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, CAST(0x000063DF00000000 AS DateTime), CAST(0x0000A27E00C1CACC AS DateTime), N'CRM', 0, N'null', N'', 1, N'255.255.255.0', N'null', CAST(0x000063DF00000000 AS DateTime), N'67.23.71.186:1992', NULL, 0, NULL, NULL, NULL, NULL, 0, 1, 1, 1, 0, 500, 500, 0, 0, 0, 0, 0, 0, N'null', 0, N'', N'', N'', N'', N'', 0, NULL, N'', 4, N'', N'', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[DEVICE] OFF
