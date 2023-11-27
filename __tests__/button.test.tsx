import React from 'react';
import renderer from 'react-test-renderer';
import {Button} from "@/app/_ui/buttons/Button";
import {ButtonIcon, ButtonIconProps} from "@/app/_ui/buttons/ButtonIcon";

describe('Button Component', () => {
    it('renders correctly with children', () => {
        const tree = renderer.create(<Button>Click me</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies custom class', () => {
        const tree = renderer.create(<Button className="custom-class">Click me</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles onClick event', () => {
        const mockOnClick = jest.fn();
        const tree = renderer.create(<Button onClick={mockOnClick}>Click me</Button>);

        // Simuler un clic
        tree.root.findByType('button').props.onClick();

        expect(mockOnClick).toHaveBeenCalled();
    });
});

describe('ButtonIcon Component', () => {
    const defaultProps: ButtonIconProps = {
        children: 'Click me',
    };

    it('renders correctly with default props', () => {
        const tree = renderer.create(<ButtonIcon {...defaultProps} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies custom class', () => {
        const tree = renderer.create(<ButtonIcon {...defaultProps} className="custom-class" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies icon on the left by default', () => {
        const tree = renderer.create(<ButtonIcon {...defaultProps} icon={<span>🚀</span>} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies icon on the right when side is set to "right"', () => {
        const tree = renderer.create(<ButtonIcon {...defaultProps} icon={<span>🚀</span>} side="right" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles onClick event', () => {
        const mockOnClick = jest.fn();
        const tree = renderer.create(<ButtonIcon {...defaultProps} onClick={mockOnClick} />);

        // Simuler un clic
        tree.root.findByType('button').props.onClick();

        expect(mockOnClick).toHaveBeenCalled();
    });
});

