import { ref } from "vue";

export const togglerArea = () => {
  const isOpen = useState("isOpen", () => false);
  const toggler = () => {
    isOpen.value = !isOpen.value;
    console.log(isOpen.value);
  };

  return { isOpen, toggler };
};
