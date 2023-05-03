import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const PDFFile = () => {
  return (
    <Document>
      <Page>
        <Text fixed></Text>


        <Text className='mt-12 mx-10 text-orange-400 border-2 bg-orange-50  border-orange-400 rounded p-5'>
            <Text>
                <Text className='text-3xl font-semibold p-3'>Q: Tell us the differences between uncontrolled and controlled components.</Text>
                <Text className='text-xl ms-4 text-black'>Ans: Uncontrolled components are managed by the DOM, while controlled components are managed by React. Controlled components provide more control and can handle input validation and state changes.</Text>
            </Text>
            <Text>
                <Text className='text-3xl font-semibold p-3 '>Q: How to validate React props using PropTypes?</Text>
                <Text className='text-xl ms-4 text-black'>Ans:
                    In React, developers can use the PropTypes library to validate the type and shape of props passed to a component. To use PropTypes, import the library at the top of the file, and then define the PropTypes for each prop passed to the component using the propTypes object.</Text>
            </Text>
            <Text>
                <Text className='text-3xl font-semibold p-3 '>Q: Tell us the difference between nodejs and express js.</Text>
                <Text className='text-xl ms-4 text-black'>Ans: Node.js is a JavaScript runtime environment that enables developers to run JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js, providing additional features for building web applications.</Text>
            </Text>
            <Text>
                <Text className='text-3xl font-semibold p-3 '>Q: What is a custom hook, and why will you create a custom hook??</Text>
                <Text className='text-xl ms-4 text-black'>Ans: Custom hooks are reusable functions in React that allow developers to extract and share logic between components. Developers create custom hooks to reduce code duplication and improve code readability and maintainability.</Text>
            </Text>
        </Text>


        <Text
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;