import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentarios', () => {
        render(<PostComment/>)

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Test-1'
            }
        })
        fireEvent.click(screen.getByTestId('comment-button'))

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Test-2'
            }
        })
        fireEvent.click(screen.getByTestId('comment-button'))

        expect(screen.getByText('Test-1')).toBeInTheDocument()
        expect(screen.getByText('Test-2')).toBeInTheDocument()
    })
});