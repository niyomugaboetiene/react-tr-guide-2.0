import Child3 from "./child3";
function Parent3() {
    function GreetUser() {
        alert("Welcome to react propos");
    }
  return (
  <Child3 GreetUser={GreetUser} />
  )
}

export default Parent3;