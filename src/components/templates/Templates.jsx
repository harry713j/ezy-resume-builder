import React , { useState }  from 'react'
import './templates.scss'
import Template1 from '../../../public/resumes/resume template-1.svg';
import Template2 from '../../../public/resumes/resume template-2.svg';
import Template3 from '../../../public/resumes/resume template-3.svg';
import Template4 from '../../../public/resumes/resume template-4.svg';

const Templates = () => {
  const [hoveredId, setHoveredId] = useState(null);
     const templates = [
    { id: 1, name: 'Kate Bishop', image: Template1 },
    { id: 2, name: 'Javier Villa', image: Template2 },
    { id: 3, name: 'Nina Patel', image: Template3 },
    { id: 4, name: 'Ralph Edwards', image: Template4 },
  ];
  return (
  <div>
      <div className="template-selection-page">
        <div className="templates-grid">
          {templates.map((template) => (
            <div
              key={template.id}
              className="template-item"
              onMouseEnter={() => setHoveredId(template.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img src={template.image} alt={`${template.name} resume template`} />
              {hoveredId === template.id && (
                <button className="select-button">SELECT TEMPLATE</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Templates
