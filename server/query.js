exports.read=`select * from EnergyMonitor`;
exports.delete=`delete from EnergyMonitor WHERE id=?`;
exports.update=`UPDATE EnergyMonitor set ? WHERE id=?`;
exports.insert=`insert into EnergyMonitor set ?`;