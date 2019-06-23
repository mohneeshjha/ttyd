import { Component, ComponentChildren, h } from 'preact';

import './modal.scss';

interface Props {
  show: boolean;
  children: ComponentChildren;
}

export class Modal extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render({ show, children }: Props) {
    return (
      show && (
        <div className="modal">
          <div className="modal-background" />
          <div className="modal-content">
            <div className="box">{children}</div>
          </div>
        </div>
      )
    );
  }
}
