const roomList = [
  { roomId: "P101", roomType: "Standard", pricePerNight: 800000, status: "VACANT" },
  { roomId: "P102", roomType: "Deluxe Ocean View", pricePerNight: 1500000, status: "VACANT" },
  { roomId: "P103", roomType: "Superior", pricePerNight: 1200000, status: "MAINTENANCE" }
];

const newRoom = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT"
};

roomList.push(newRoom);
console.log(`\n[CREATE] Đã thêm thành công phòng mới: ${newRoom.roomId} (${newRoom.roomType})`);

const targetUpdateRoomId = "P101";
const newStatus = "OCCUPIED";

const roomToUpdate = roomList.find((room) => room.roomId === targetUpdateRoomId);

if (roomToUpdate) {
  roomToUpdate.status = newStatus;
  console.log(`\n[UPDATE] Đã cập nhật trạng thái phòng ${targetUpdateRoomId} sang: "${newStatus}"`);
} else {
  console.log(`\n[UPDATE LỖI] Không tìm thấy phòng có mã: ${targetUpdateRoomId}`);
}

const targetDeleteRoomId = "P103";
// Tìm vị trí (index) của phòng cần xóa trong mảng
const deleteIndex = roomList.findIndex((room) => room.roomId === targetDeleteRoomId);
if (deleteIndex !== -1) {
  // Xóa 1 phần tử tại vị trí deleteIndex
  const removedRooms = roomList.splice(deleteIndex, 1);
  console.log(`\n[DELETE] Đã xóa phòng ${removedRooms[0].roomId} khỏi hệ thống.`);
} else {
  console.log(`\n[DELETE LỖI] Không tìm thấy phòng cần xóa với mã: ${targetDeleteRoomId}`);
}
