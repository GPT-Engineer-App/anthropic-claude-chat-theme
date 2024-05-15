import { useState } from "react";
import { ChakraProvider, Container, VStack, Heading, FormControl, FormLabel, CheckboxGroup, Stack, Checkbox, RadioGroup, Box, Text, Radio, Textarea, Select, Button, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const theme = {
  // Define your custom theme here if needed
};

const Index = () => {
  const [providers, setProviders] = useState([]);
  const [models, setModels] = useState({});
  const [content, setContent] = useState("");
  const [responseType, setResponseType] = useState("standard");
  const [responses, setResponses] = useState([]);

  const handleProviderChange = (selectedProviders) => {
    setProviders(selectedProviders);
  };

  const handleModelChange = (provider, value) => {
    setModels((prevModels) => ({ ...prevModels, [provider]: value }));
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleResponseTypeChange = (event) => {
    setResponseType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const newResponse = `Response from ${providers.join(", ")}: ${content}`;
    setResponses((prevResponses) => [...prevResponses, newResponse]);
  };

  const getProviderHighlight = (provider) => {
    return providers.includes(provider) ? "1.5px solid teal" : "none";
  };

  const isSubmitDisabled = providers.length === 0 || content.trim() === "";

  return (
    <ChakraProvider theme={theme}>
      <Container centerContent maxW="container.md" py={8}>
        <VStack spacing={4} as="form" onSubmit={handleSubmit}>
          <Heading as="h1" size="xl">
            Multi Chat by Shirezak
          </Heading>

          <FormControl as="fieldset" border={providers.length === 0 ? "1.5px solid gray" : "none"} p={3} borderRadius="md">
            <FormLabel as="legend">Select LLM Provider:</FormLabel>
            <CheckboxGroup value={providers} onChange={handleProviderChange}>
              <Stack spacing={2} direction="row">
                <Checkbox id="provider-openai" value="openai">
                  OpenAI
                </Checkbox>
                <Checkbox id="provider-anthropic" value="anthropic">
                  Anthropic
                </Checkbox>
                <Checkbox id="provider-google" value="google">
                  Google
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          {providers.includes("openai") && (
            <FormControl border={getProviderHighlight("openai")} p={3} borderRadius="md">
              <FormLabel as="legend">Select Model:</FormLabel>
              <RadioGroup value={models["openai"] || ""} onChange={(value) => handleModelChange("openai", value)}>
                <Box>
                  <Text>OpenAI Models</Text>
                  <Stack direction="row">
                    <Radio id="model-openai-gpt-4o" value="gpt-4o">
                      GPT 4o
                    </Radio>
                    <Radio id="model-openai-gpt-4-turbo" value="gpt-4-turbo">
                      GPT 4 Turbo
                    </Radio>
                    <Radio id="model-openai-gpt-3.5-turbo-0125" value="gpt-3.5-turbo-0125">
                      GPT 3.5 Turbo Flagship
                    </Radio>
                  </Stack>
                </Box>
              </RadioGroup>
            </FormControl>
          )}

          {providers.includes("anthropic") && (
            <FormControl border={getProviderHighlight("anthropic")} p={3} borderRadius="md">
              <FormLabel as="legend">Select Model:</FormLabel>
              <RadioGroup value={models["anthropic"] || ""} onChange={(value) => handleModelChange("anthropic", value)}>
                <Box>
                  <Text>Anthropic Models</Text>
                  <Stack direction="row">
                    <Radio id="model-anthropic-claude-3-opus" value="claude-3-opus-20240229">
                      Claude 3 Opus
                    </Radio>
                    <Radio id="model-anthropic-claude-3-sonnet" value="claude-3-sonnet-20240229">
                      Claude 3 Sonnet
                    </Radio>
                    <Radio id="model-anthropic-claude-3-haiku" value="claude-3-haiku-20240307">
                      Claude 3 Haiku
                    </Radio>
                  </Stack>
                </Box>
              </RadioGroup>
            </FormControl>
          )}

          {providers.includes("google") && (
            <FormControl border={getProviderHighlight("google")} p={3} borderRadius="md">
              <FormLabel as="legend">Select Model:</FormLabel>
              <RadioGroup value={models["google"] || ""} onChange={(value) => handleModelChange("google", value)}>
                <Box>
                  <Text>Google Models</Text>
                  <Stack direction="row">
                    <Radio id="model-google-gemini-1.5-pro-latest" value="gemini-1.5-pro-latest">
                      Gemini 1.5 Pro
                    </Radio>
                    <Radio id="model-google-gemini-pro" value="gemini-pro">
                      Gemini 1 Pro
                    </Radio>
                  </Stack>
                </Box>
              </RadioGroup>
            </FormControl>
          )}

          <FormControl border={getProviderHighlight("content")} p={3} borderRadius="md">
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
            const [header, ...body] = res.split("\n");
            return (
              <Box key={idx} mt={4} p={4} borderWidth="1.5px" borderRadius="md" width="100%">
                <Flex bg="gray.600" color="white" p={2} borderRadius="md" mb={2}>
                  <Text fontWeight="bold">{header}</Text>
                </Flex>
                <Text as="pre" whiteSpace="pre-wrap">
                  {body.join("\n")}
                </Text>
              </Box>
            );
          })}
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
