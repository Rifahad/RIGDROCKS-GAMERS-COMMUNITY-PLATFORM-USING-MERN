
function Lines({ color }) {
  return (
    <div className="w-full h-[35px] flex flex-col items-center  gap-2"> 
      <hr className={`w-[80%] bg-${color}-500  h-[8px] border-transparent   rounded-b-lg`} />
      <hr className={`w-[60%] bg-${color}-500  h-[6px] border-transparent rounded-b-lg`} />

    </div>
  );
}

export default Lines;
