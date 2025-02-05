import React from "react";
import WrongSwitch from "react-switch";

const Switch = WrongSwitch as any;

type SwitchButtonProps = {
  handleSwitch: () => void;
  isChecked: boolean;
};

function SwitchButton({ handleSwitch, isChecked }: SwitchButtonProps) {
  return (
    <Switch
      onChange={handleSwitch}
      checked={isChecked || false}
      width={28}
      height={16}
      className="border-none !bg-opacity-100"
      handleDiameter={12}
      uncheckedIcon={null}
      checkedIcon={null}
      offColor="#B1B1C8"
      onColor="#fccfba"
      offHandleColor="#363446"
      onHandleColor="#F76831"
      autoFocus={false}
    />
  );
}

export default SwitchButton;
