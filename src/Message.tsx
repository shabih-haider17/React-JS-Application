let count = 0;
const Message = () => {
  console.log("message", count);
  count++;
  return <div>Hello world {count}</div>;
};
export default Message;
