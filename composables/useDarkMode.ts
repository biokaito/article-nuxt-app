const useDarkMode = () =>{
    //const isDarkMode = ref(false); 
    // Ref or reactive should always only be used inside of script setup
    // Because it is not server side rendering friendly, and it could cause some memory leaks

    const isDarkMode = useState("darkMode", () => false); 

    const toggleDarkMode = () =>{
        isDarkMode.value = !isDarkMode.value;
    }

    return {
        isDarkMode,
        toggleDarkMode
    }
}

export default useDarkMode;