import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

/*
Tests to be run: 
    -Inputs accept valid inputs and submit functions properly 
    - Error messages for incorrect input 
    - Two entries - page only dispalys newest form submission

Rember the Frame Work: [Arrange, Act, Assert] = AAA
*/

test('Form accepts input and submits properly', async () => {
    //Arrange
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByText(/submit!/i);
    //Act
    
    fireEvent.change(firstNameInput, {target: {value: 'Joe'}});
    fireEvent.change(lastNameInput, {target: {value: 'Lasata'}});
    fireEvent.change(emailInput, {target: {value: 'Joe@mail.com'}});
    fireEvent.click(submitButton);

    //Assert
    

});