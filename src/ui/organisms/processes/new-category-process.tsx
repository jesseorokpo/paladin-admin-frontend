import { useState } from "react";
import {
  Modal,
  Button,
  Group,
  TextInput,
  Text,
  Grid,
  Select,
  Box,
  PasswordInput,
  Avatar,
  AspectRatio,
  ActionIcon,
  Textarea,
} from "@mantine/core";
import { SectionHeader } from "../header-widgets/SectionHeader";
import { useForm } from "@mantine/form";
import { taxonomyManager } from "@store/catalog/taxonomy";
import Dropzone from "react-dropzone";
import { uploadImage } from "@services/cloudinary";
import { Edit2 } from "iconsax-react";
import { values } from "mobx";

export function NewCategoryProcess() {
  const [opened, setOpened] = useState(false);

  const form = useForm({
    initialValues: {
      description: "",
      image: "",
      name: "",
      type: "",
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Category"
      >
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
            taxonomyManager.publishItem({
              ...values,
            });
        setOpened(false);
          })}
        >
          <Grid>
            <Grid.Col md={6}>
              <Box>
                <Dropzone
                  onDropAccepted={(props) => {
                    // toast("Uploading file...");
                    uploadImage(props[0])
                      .then((url) => {
                        console.log(url);
                        form.setFieldValue("image", url ?? "");
                      })
                      .catch((err: any) => {
                        console.log(err);
                      });
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <AspectRatio
                      {...getRootProps()}
                      ratio={1 / 0.5}
                      style={{}}
                      sx={() => {
                        let temp =
                          "https://packhelp-landing-assets.s3.eu-central-1.amazonaws.com/wp-content/uploads/2019/06/06153006/product-boxes-packhelp-ed.jpg";
                        return {
                          backgroundImage: `url(${form.values.image ?? temp})`,
                          backgroundSize: "cover",
                        };
                      }}
                    >
                      <ActionIcon
                        aria-activedescendant=""
                        variant="transparent"
                      >
                        <Edit2 />
                        <input {...getInputProps()} />
                      </ActionIcon>
                    </AspectRatio>
                  )}
                </Dropzone>
              </Box>
            </Grid.Col>
            <Grid.Col md={12}>
              <TextInput
                label="Category Name"
                {...form.getInputProps("name")}
              />
            </Grid.Col>
            <Grid.Col md={12}>
              <Textarea
                label="Description"
                {...form.getInputProps("description")}
              />
            </Grid.Col>
            <Grid.Col md={12}>
              <Select
                label="Type"
                data={[{ value: "collection", label: "Collection" }]}
                value={form.values.type}
                onChange={(e) => {
                  console.log(e)
                  form.setFieldValue("type", e??"");
                }}
              />
            </Grid.Col>
          </Grid>

          <Box sx={{ height: 24 }} />
          <Grid>
            <Grid.Col span={12}>
              <Button fullWidth type="submit">Create</Button>
            </Grid.Col>
          </Grid>
        </form>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Create Category</Button>
      </Group>
    </>
  );
}
