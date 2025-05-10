function UserAvatar() {
  return (
    <div className="flex items-center gap-3.5 text-base font-medium text-gray-600">
      <img
        src={"default-user.jpg"}
        alt={`Avatar of User`}
        className="h-10 w-10 rounded-full border-2 border-gray-100 object-cover object-center"
      />
      <span>Quoc Anh</span>
    </div>
  );
}

export default UserAvatar;
