import { useState, useRef, useCallback, ReactElement, ReactNode } from 'react';
import Frame, { FrameComponentProps, FrameContextConsumer } from 'react-frame-component';
import { MantineProvider } from '@mantine/core';

/*
The MIT License (MIT)

Copyright (c) 2014 Call-Em-All

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

interface DemoFrameProps extends FrameComponentProps {
  theme: string;
  /** override children to be ReactElement to avoid Typescript issue. In this case we don't need to worry about
   * children being of the other valid ReactNode types, undefined and string as it always contains an RJSF `Form`
   */
  children: ReactElement;
}

export default function DemoFrame(props: DemoFrameProps) {
  const { children, head, theme, ...frameProps } = props;

  const [ready, setReady] = useState(false);

  const instanceRef = useRef<any>();

  const handleRef = useCallback(
    (ref: any) => {
      instanceRef.current = {
        contentDocument: ref ? ref.node.contentDocument : null,
        contentWindow: ref ? ref.node.contentWindow : null,
      };
    },
    [instanceRef]
  );

  const onContentDidMount = useCallback(() => {
    setReady(true);
  }, []);

  let body: ReactNode = children;
  if (theme === 'mantine') {
    body = ready ? (
      <FrameContextConsumer>
        {({ document }) => (
          <MantineProvider getRootElement={() => document?.body} cssVariablesSelector='body'>
            {children}
          </MantineProvider>
        )}
      </FrameContextConsumer>
    ) : null;
  }

  return (
    <Frame ref={handleRef} contentDidMount={onContentDidMount} head={head} {...frameProps}>
      <div id='demo-frame-jss' />
      {body}
    </Frame>
  );
}
