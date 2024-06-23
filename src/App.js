import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import useFormValidation from './useFormValidation';
import useFetchQuestions from './useFetchQuestions';
import validateForm from './validateForm';

const initialState = {
  fullName: '',
  email: '',
  surveyTopic: '',
  favoriteProgrammingLanguage: '',
  yearsOfExperience: '',
  exerciseFrequency: '',
  dietPreference: '',
  highestQualification: '',
  fieldOfStudy: '',
  feedback: '',
};

const App = () => {
  const { formData, errors, handleChange, handleSubmit } = useFormValidation(initialState, validateForm);
  const [showSummary, setShowSummary] = useState(false);
  const questions = useFetchQuestions(formData.surveyTopic);

  const onSubmit = (e) => {
    handleSubmit(e);
    if (Object.keys(errors).length === 0) {
      setShowSummary(true);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Survey Form</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="surveyTopic" className="form-label">Survey Topic</label>
          <select className="form-control" id="surveyTopic" name="surveyTopic" value={formData.surveyTopic} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <div className="text-danger">{errors.surveyTopic}</div>}
        </div>

        {formData.surveyTopic === 'Technology' && (
          <div>
            <div className="mb-3">
              <label htmlFor="favoriteProgrammingLanguage" className="form-label">Favorite Programming Language</label>
              <select className="form-control" id="favoriteProgrammingLanguage" name="favoriteProgrammingLanguage" value={formData.favoriteProgrammingLanguage} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
              </select>
              {errors.favoriteProgrammingLanguage && <div className="text-danger">{errors.favoriteProgrammingLanguage}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="yearsOfExperience" className="form-label">Years of Experience</label>
              <input type="number" className="form-control" id="yearsOfExperience" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} />
              {errors.yearsOfExperience && <div className="text-danger">{errors.yearsOfExperience}</div>}
            </div>
          </div>
        )}

        {formData.surveyTopic === 'Health' && (
          <div>
            <div className="mb-3">
              <label htmlFor="exerciseFrequency" className="form-label">Exercise Frequency</label>
              <select className="form-control" id="exerciseFrequency" name="exerciseFrequency" value={formData.exerciseFrequency} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Rarely">Rarely</option>
              </select>
              {errors.exerciseFrequency && <div className="text-danger">{errors.exerciseFrequency}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="dietPreference" className="form-label">Diet Preference</label>
              <select className="form-control" id="dietPreference" name="dietPreference" value={formData.dietPreference} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
              </select>
              {errors.dietPreference && <div className="text-danger">{errors.dietPreference}</div>}
            </div>
          </div>
        )}

        {formData.surveyTopic === 'Education' && (
          <div>
            <div className="mb-3">
              <label htmlFor="highestQualification" className="form-label">Highest Qualification</label>
              <select className="form-control" id="highestQualification" name="highestQualification" value={formData.highestQualification} onChange={handleChange}>
                <option value="">Select...</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
              {errors.highestQualification && <div className="text-danger">{errors.highestQualification}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="fieldOfStudy" className="form-label">Field of Study</label>
              <input type="text" className="form-control" id="fieldOfStudy" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} />
              {errors.fieldOfStudy && <div className="text-danger">{errors.fieldOfStudy}</div>}
            </div>
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">Feedback</label>
          <textarea className="form-control" id="feedback" name="feedback" rows="3" value={formData.feedback} onChange={handleChange}></textarea>
          {errors.feedback && <div className="text-danger">{errors.feedback}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {showSummary && (
        <div className="mt-5">
          <h2>Survey Summary</h2>
          <p><strong>Full Name:</strong> {formData.fullName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Survey Topic:</strong> {formData.surveyTopic}</p>
          {formData.surveyTopic === 'Technology' && (
            <>
              <p><strong>Favorite Programming Language:</strong> {formData.favoriteProgrammingLanguage}</p>
              <p><strong>Years of Experience:</strong> {formData.yearsOfExperience}</p>
            </>
          )}
          {formData.surveyTopic === 'Health' && (
            <>
              <p><strong>Exercise Frequency:</strong> {formData.exerciseFrequency}</p>
              <p><strong>Diet Preference:</strong> {formData.dietPreference}</p>
            </>
          )}
          {formData.surveyTopic === 'Education' && (
            <>
              <p><strong>Highest Qualification:</strong> {formData.highestQualification}</p>
              <p><strong>Field of Study:</strong> {formData.fieldOfStudy}</p>
            </>
          )}
          <p><strong>Feedback:</strong> {formData.feedback}</p>
          {questions.length > 0 && (
            <div>
              <h3>Additional Questions</h3>
              <ul>
                {questions.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
