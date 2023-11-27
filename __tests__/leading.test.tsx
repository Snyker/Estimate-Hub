import renderer from 'react-test-renderer';
import {Leading1, Leading2, Leading3} from "@/app/_ui/leadings/Leading";

describe('Leading1 Component', () => {
    it('renders children correctly', () => {
        const tree = renderer.create(<Leading1>Hello, World!</Leading1>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies custom class name', () => {
        const tree = renderer.create(<Leading1 className="custom-class">Custom Heading</Leading1>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies additional HTML attributes', () => {
        const tree = renderer.create(<Leading1 id="custom-id">Heading with custom ID</Leading1>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Leading2 Component', () => {
    it('renders children correctly', () => {
        const tree = renderer.create(<Leading2>Hello, World!</Leading2>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies custom class name', () => {
        const tree = renderer.create(<Leading2 className="custom-class">Custom Heading</Leading2>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies additional HTML attributes', () => {
        const tree = renderer.create(<Leading2 id="custom-id">Heading with custom ID</Leading2>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


describe('Leading3 Component', () => {
    it('renders children correctly', () => {
        const tree = renderer.create(<Leading3>Hello, World!</Leading3>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies custom class name', () => {
        const tree = renderer.create(<Leading3 className="custom-class">Custom Heading</Leading3>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies additional HTML attributes', () => {
        const tree = renderer.create(<Leading3 id="custom-id">Heading with custom ID</Leading3>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
