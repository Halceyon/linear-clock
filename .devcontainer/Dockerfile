FROM mcr.microsoft.com/devcontainers/base:bullseye

# Add browser apt repositories
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'

RUN wget -q -O - https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge.list'

RUN apt-get update

# Install packages for Cypress
RUN export DEBIAN_FRONTEND=noninteractive \
     && apt-get -y install --no-install-recommends libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb

# Install Firefox
# RUN apt-get install -y firefox-esr

# Install Chrome
# RUN apt-get install -y google-chrome-stable

# Install Edge
# RUN apt-get install -y microsoft-edge-stable

# Clean up
RUN apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/*
