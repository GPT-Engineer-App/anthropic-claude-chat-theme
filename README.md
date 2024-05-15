# anthropic-claude-chat-theme

Revise this to be more like Anthropic Claude Chat theme:      <ChakraProvider theme={theme}>
      <Container centerContent maxW="container.md" py={8}>
        <VStack spacing={4} as="form" onSubmit={handleSubmit}>
          <Heading as="h1" size="xl">
            Multi Chat by Shirezak
          </Heading>

          <FormControl as="fieldset" border={providers.length === 0 ? '1.5px solid gray' : 'none'} p={3} borderRadius="md">
            <FormLabel as="legend">Select LLM Provider:</FormLabel>
            <CheckboxGroup value={providers} onChange={handleProviderChange}>
              <Stack spacing={2} direction="row">
                <Checkbox id="provider-openai" value="openai">OpenAI</Checkbox>
                <Checkbox id="provider-anthropic" value="anthropic">Anthropic</Checkbox>
                <Checkbox id="provider-google" value="google">Google</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          {providers.includes("openai") && (
            <FormControl border={getProviderHighlight('openai')} p={3} borderRadius="md">
              <FormLabel as="legend">Select Model:</FormLabel>
              <RadioGroup value={models['openai'] || ''} onChange={(value) => handleModelChange('openai', value)}>
                <Box>
                  <Text>OpenAI Models</Text>
                  <Stack direction="row">
                    <Radio id="model-openai-gpt-4o" value="gpt-4o">GPT 4o</Radio>
                    <Radio id="model-openai-gpt-4-turbo" value="gpt-4-turbo">GPT 4 Turbo</Radio>
                    <Radio id="model-openai-gpt-3.5-turbo-0125" value="gpt-3.5-turbo-0125">GPT 3.5 Turbo Flagship</Radio>
                  </Stack>
                </Box>
              </RadioGroup>
            </FormControl>
          )}

          {providers.includes("anthropic") && (
            <FormControl border={getProviderHighlight('anthropic')} p={3} borderRadius="md">
              <FormLabel as="legend">Select Model:</FormLabel>
              <RadioGroup value={models['anthropic'] || ''} onChange={(value) => handleModelChange('anthropic', value)}>
                <Box>
                  <Text>Anthropic Models</Text>
                  <Stack direction="row">
                    <Radio id="model-anthropic-claude-3-opus" value="claude-3-opus-20240229">Claude 3 Opus</Radio>
                    <Radio id="model-anthropic-claude-3-sonnet" value="claude-3-sonnet-20240229">Claude 3 Sonnet</Radio>
                    <Radio id="model-anthropic-claude-3-haiku" value="claude-3-haiku-20240307">Claude 3 Haiku</Radio>
                  </Stack>
                </Box>
              </RadioGroup>
            </FormControl>
          )}

          {providers.includes("google") && (
            <FormControl border={getProviderHighlight('google')} p={3} borderRadius="md">
              <FormLabel as="legend">Select Model:</FormLabel>
              <RadioGroup value={models['google'] || ''} onChange={(value) => handleModelChange('google', value)}>
                <Box>
                  <Text>Google Models</Text>
                  <Stack direction="row">
                    <Radio id="model-google-gemini-1.5-pro-latest" value="gemini-1.5-pro-latest">Gemini 1.5 Pro</Radio>
                    <Radio id="model-google-gemini-pro" value="gemini-pro">Gemini 1 Pro</Radio>
                  </Stack>
                </Box>
              </RadioGroup>
            </FormControl>
          )}

          <FormControl border={getProviderHighlight('content')} p={3} borderRadius="md">
            <FormLabel htmlFor="content">Content:</FormLabel>
            <Textarea id="content" value={content} onChange={handleContentChange} required />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="responseType">Response Type:</FormLabel>
            <Select id="responseType" value={responseType} onChange={handleResponseTypeChange}>
              <option value="standard">Standard</option>
              <option value="streaming">Streaming</option>
            </Select>
          </FormControl>

          <Button type="submit" colorScheme="teal" leftIcon={<FaRocket />} disabled={isSubmitDisabled}>
            Submit
          </Button>

          {responses.map((res, idx) => {
            const [header, ...body] = res.split('\n');
            return (
              <Box key={idx} mt={4} p={4} borderWidth="1.5px" borderRadius="md" width="100%">
                <Flex bg="gray.600" color="white" p={2} borderRadius="md" mb={2}>
                  <Text fontWeight="bold">{header}</Text>
                </Flex>
                <Text as="pre" whiteSpace="pre-wrap">
                  {body.join('\n')}
                </Text>
              </Box>
            );
          })}
        </VStack>
      </Container>
    </ChakraProvider>


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/anthropic-claude-chat-theme.git
cd anthropic-claude-chat-theme
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
