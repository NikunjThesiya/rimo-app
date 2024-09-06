import React from "react";
import styles from "@/assets/scss/components/customSelect.module.scss";

const CustomSelect = ({ label, name, onChange, disabled, value, options }) => {
	return (
		<div className={styles.customSelect}>
			{/* {
        label && (
          <label>{label}</label>
        )
      } */}
			<div className={styles.selectContainer}>
				<select
					name={name}
					onChange={onChange}
					disabled={disabled}
					value={value}
				>
					<option value="">Filter {label}</option>
					{options?.map((option, index) => {
						return (
							<option key={index} value={option?.value}>
								{option?.label}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export default CustomSelect;
