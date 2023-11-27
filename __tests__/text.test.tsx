import React from 'react';
import renderer from 'react-test-renderer';
import {SpanDot, SpanDotProps} from "@/app/_ui/texts/SpanDot";

describe('SpanDot Component', () => {
    const defaultProps: SpanDotProps = {
        children: 'Some text',
    };

    it('renders correctly with default props', () => {
        const tree = renderer.create(<SpanDot {...defaultProps} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies custom class', () => {
        const tree = renderer.create(<SpanDot {...defaultProps} className="custom-class" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies dot class and text class when isValid is true', () => {
        const tree = renderer.create(<SpanDot {...defaultProps} isValid={true} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies custom dot class and text class when isValid is true', () => {
        const tree = renderer.create(<SpanDot {...defaultProps} isValid={true} dotValidClass="custom-dot-class" validClass="custom-valid-class" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
