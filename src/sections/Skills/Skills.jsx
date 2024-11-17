import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='Javascript' />
        <SkillList src={checkMarkIcon} skill='Typescript' />
        <SkillList src={checkMarkIcon} skill='React' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Swift' />
        <SkillList src={checkMarkIcon} skill='SwiftUI' />
        <SkillList src={checkMarkIcon} skill='UIKit' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Godot' />
        <SkillList src={checkMarkIcon} skill='Unity' />
      </div>
    </section>
  );
};
export default Skills;
