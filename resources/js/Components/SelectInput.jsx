import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function SelectSearch({
    options = [],
    value,
    onChange,
    placeholder = ":: Pilih ::",
    name,
    isClearable = false,
}) {
    // Detect dark/light mode
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setTheme(mq.matches ? "dark" : "light");

        const handler = (e) => setTheme(e.matches ? "dark" : "light");
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    // Custom styles mirip DaisyUI + dark mode
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: theme === "dark" ? "#1f2937" : "white",
            borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
            boxShadow: state.isFocused ? `0 0 0 1px #3b82f6` : null,
            borderRadius: "0.5rem",
            minHeight: "2.5rem",
            fontSize: "1rem",
            cursor: "pointer",
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: theme === "dark" ? "#1f2937" : "white",
            borderRadius: "0.5rem",
            zIndex: 9999,
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused
                ? theme === "dark"
                    ? "#374151"
                    : "#e0e7ff"
                : "transparent",
            color: theme === "dark" ? "white" : "black",
            cursor: "pointer",
        }),
        singleValue: (provided) => ({
            ...provided,
            color: theme === "dark" ? "white" : "black",
        }),
        placeholder: (provided) => ({
            ...provided,
            color: theme === "dark" ? "#9ca3af" : "#6b7280",
        }),
    };

    // Karena react-select value harus object, kita convert value (id) ke option object
    const selectedOption = options.find((opt) => opt.value === value) || null;

    // onChange react-select mengirim object, kita kirim value.id ke parent
    const handleChange = (selected) => {
        onChange({ target: { name, value: selected ? selected.value : "" } });
    };

    return (
        <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            styles={customStyles}
            placeholder={placeholder}
            isClearable={isClearable}
            classNamePrefix="react-select"
            name={name}
            menuPlacement="auto"
        />
    );
}
