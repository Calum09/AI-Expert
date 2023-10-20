import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 itmes-center justify-center">
      <div className="w-14.5 h-4 flex justify-center items-center">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
      <p className="text-sm text-muted-foreground">Expert is thinking</p>
    </div>
  );
};
