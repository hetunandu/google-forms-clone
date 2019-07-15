## Google Forms Clone

- The overall application is similar to google forms. There are three major functionalities of application:
  - A Form builder
  - Sharing, filling & submitting the form
  - Viewing the responses
- You are only required to build the first part (form builder) but its extensibility to other functionalities must be kept in mind while designing the architecture.
- Form builder specifications
- The form builder’s UI is a list of input & non-input elements arranged in stacked from top to bottom of the page
- Each element could be either of
  - Static (Non input. Just static text)
  - Text (Input)
  - Radio
  - Drop down
- Form JSON
The form builder should be exportable as a JSON which could be parsed in future to generate the same UI again. Reference
Use this JSON to create the actual form UI as well.

#### Application evaluation parameters
Your application would be evaluated on the following parameters:
- Code quality (Modular approach preferred)
- Well defined state management
- React-redux would be preferred, but you can use Angular 2^ or VueJs or any other recent framework.
- How extendable your code is. You may be asked to add more features in the following rounds.
- Corner cases handling and proper success/error message outputs.
- Adding extra functionalities (See 1st point) would be a plus.
- Simple and effective styling would be sufficient.
- You can use a starter-kit of your choice to get started.
- Share the code via a zip or by giving us access to a private git repository.

What are we looking for?
- Assumptions you take, given the limited requirements
- Technology and design choices
