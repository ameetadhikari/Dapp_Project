import { generateAmitMarkData, generateRajuMarkData, generateKabirMarkData, generateSujitMarkData, } from '../services/studentService.js';
import { validationResult } from 'express-validator';
/**
 * Gets the weather data for a student
 * @param req the request object
 * @param res the response object
 */
export const getStudentData = async (req, res) => {
    // Check if there are any validation errors
    const errors = validationResult(req);
    // We will log them and send a 400 status code
    if (!errors.isEmpty()) {
        console.error('Validation error', errors.mapped());
        res.status(400).json({ errors: errors.array() });
        return;
    }
    // We will use a try catch block to catch any errors
    try {
        // Get the student param from the request
        const { student } = req.params;
        console.log(student);
        // We will create a variable with a type of StudentData
        let finalStudentData;
        // We will use an if statement to check which student was passed in
        if (student === 'Amit') {
            console.log(generateAmitMarkData());
            finalStudentData = generateAmitMarkData();
        }
        else if (student === 'Raju') {
            finalStudentData = generateRajuMarkData();
        }
        else if (student === 'Kabir') {
            finalStudentData = generateKabirMarkData();
        }
        else if (student === 'Sujit') {
            finalStudentData = generateSujitMarkData();
        }
        else {
            // If the student is not london or dublin, we will throw an error
            res.status(404).send('student not found');
            return;
        }
        res.status(200).json(finalStudentData);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        res.status(500).send('Error in fetching student data');
    }
};
//# sourceMappingURL=studentController.js.map