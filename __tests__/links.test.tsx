import React from 'react';
import renderer from 'react-test-renderer';
import {Anchor} from "@/app/_ui/links/Anchor";
import {LinkProps} from "next/link";

describe('Anchor Component', () => {
    const defaultProps: LinkProps = {
        href: '/example',
    };

    it('renders correctly with default props', () => {
        const tree = renderer.create(<Anchor {...defaultProps}>Click me</Anchor>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies custom class', () => {
        const tree = renderer.create(<Anchor {...defaultProps} className="custom-class">Click me</Anchor>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies next/link properties correctly', () => {
        const tree = renderer.create(<Anchor {...defaultProps} prefetch={false}>Click me</Anchor>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
