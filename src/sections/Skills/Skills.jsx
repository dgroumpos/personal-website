import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

const Skills = () => {
  return (
    <section id='skills' className=''>
      <h1 className='sectionTitle'>Skills</h1>
      <div className=''>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='Javascript' />
        <SkillList src={checkMarkIcon} skill='Typescript' />
      </div>
      <hr />
      <div className=''>
        <SkillList src={checkMarkIcon} skill='React,js' />
        <SkillList src={checkMarkIcon} skill='Next.js' />
        <SkillList src={checkMarkIcon} skill='Tailwind CSS' />
      </div>
      <hr />
      <div className=''>
        <SkillList src={checkMarkIcon} skill='C#' />
        <SkillList src={checkMarkIcon} skill='ASP.NET Core' />
        <SkillList src={checkMarkIcon} skill='Microsoft SQL Server' />
        <SkillList src={checkMarkIcon} skill='Microservices' />
        <SkillList src={checkMarkIcon} skill='RabbitMQ' />
      </div>
      <hr />
      <div className=''>
        <SkillList src={checkMarkIcon} skill='Godot' />
      </div>
    </section>
  );
};
export default Skills;
