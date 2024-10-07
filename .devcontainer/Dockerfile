FROM ubuntu:24.04

# # Add browser apt repositories
# RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
#     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'

# RUN wget -q -O - https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
#     && sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge.list'

RUN apt-get update

# Install packages for Cypress
RUN export DEBIAN_FRONTEND=noninteractive \
      && apt-get -y install --no-install-recommends libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# Install packages for Tauri
RUN export DEBIAN_FRONTEND=noninteractive \
      && apt-get install -y libwebkit2gtk-4.1-dev build-essential curl wget file libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev

# Install Firefox
# RUN apt-get install -y firefox-esr

# Install Chrome
# RUN apt-get install -y google-chrome-stable

# Install Edge
# RUN apt-get install -y microsoft-edge-stable

# Clean up
RUN apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/*
