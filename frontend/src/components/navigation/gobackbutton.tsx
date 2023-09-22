import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";


function GoBackButton() {
    const router = useRouter();


    function handleClick() {
      router.back();
    }

    return (
      <Button variant="primary" onClick={handleClick}>
        Go Back
      </Button>
    );
  }

export default GoBackButton;