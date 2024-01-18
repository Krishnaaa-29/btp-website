const InputBox = ({ name, type, id, value, placeholder, changeHandler }) => {
  return (
    <div className="relative w-[80%] mb-4 mx-auto">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={changeHandler}
        className="w-full bg-[#eeeff1] px-4 py-2 rounded-md"
      />
    </div>
  );
};
export default InputBox;
