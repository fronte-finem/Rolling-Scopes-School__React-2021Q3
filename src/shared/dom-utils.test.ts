import '@testing-library/jest-dom';
import { updateTitle, toggleParentClass } from './dom-utils';

describe('Update Title', () => {
  it('should update title', () => {
    document.title = 'test';
    expect(document.title).toBe('test');

    updateTitle('Test 42');
    expect(document.title).toMatch('test | Test 42');

    updateTitle();
    expect(document.title).toBe('test');
  });
});

describe('Toggle Parent Class', () => {
  const addTestToParent = toggleParentClass('test', true);
  const removeTestFromParent = toggleParentClass('test', false);

  const setup = () => {
    const parent = document.createElement('div');
    const child = document.createElement('div');
    parent.append(child);
    return { parent, child };
  };

  it('should toggle class', () => {
    const { parent, child } = setup();

    expect(parent).not.toHaveClass('test');

    addTestToParent(child);
    expect(parent).toHaveClass('test');

    removeTestFromParent(child);
    expect(parent).not.toHaveClass('test');
  });
});
