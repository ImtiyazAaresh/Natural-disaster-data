/****** Object:  StoredProcedure [dbo].[mytestproc]    Script Date: 22-06-2020 07:33:21 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      <Author, , Name>
-- Create Date: <Create Date, , >
-- Description: <Description, , >
-- =============================================
CREATE PROCEDURE [dbo].[mytestproc] @range int,@minlat float,@maxlat float
AS
BEGIN
declare @radminlat as float,@radmaxlat as float,@place as varchar(50),@startt as time,@endt as time,@timeinmn as int,@mag as int;
create table #temptable (cminlat float,cmaxlat float,place varchar(50),mag int,timeinms int);
while @range>0
begin
set @radminlat = (Rand()* (@maxlat-@minlat +1))+@minlat;
set @radmaxlat = (Rand()* (@maxlat-@minlat +1))+@maxlat;
set @startt = CURRENT_TIMESTAMP;
set @place = (select place from dbo.earth where latitude between @radminlat and @radmaxlat);
set @mag = (select mag from dbo.earth where latitude between @radminlat and @radmaxlat);
set @endt = CURRENT_TIMESTAMP;
set @timeinmn = DATEDIFF(ms, @startt, @endt);
insert into #temptable values(@radminlat,@radmaxlat,@place,@mag,@timeinmn);
set @range=@range-1;
end;
select * from #temptable;
END;
GO


